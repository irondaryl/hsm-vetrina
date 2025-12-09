import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';

interface Review {
  id?: number;
  authorName: string;
  authorAvatarUrl?: string;
  rating: number;
  comment: string;
  createdAt?: string;
}

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  user: SocialUser | null = null;
  reviews: Review[] = [];
  form: FormGroup;
  loading = false;

  private apiBase = 'http://localhost:8082/api/reviews'; // backend SpringBoot

  constructor(
    private auth: SocialAuthService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.form = this.fb.group({
      rating: [5, [Validators.required]],
      comment: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {
    this.auth.authState.subscribe((user) => {
      this.user = user;
    });

    this.loadReviews();
  }

  signInWithGoogle(): void {
    this.auth.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.auth.signOut();
    this.user = null;
  }

  loadReviews(): void {
    this.http.get<Review[]>(this.apiBase).subscribe((data) => {
      this.reviews = data;
    });
  }

  onSubmit(): void {
    if (!this.user || this.form.invalid) {
      return;
    }

    const payload: Review = {
      authorName: this.user.name,
      authorAvatarUrl: this.user.photoUrl || undefined,
      rating: this.form.value.rating,
      comment: this.form.value.comment,
    };

    this.loading = true;

    this.http.post<Review>(this.apiBase, payload).subscribe({
      next: (saved) => {
        this.loading = false;
        this.form.reset({ rating: 5, comment: '' });
        this.reviews = [saved, ...this.reviews];
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  // 👉 Getter sicuro per il valore di rating (evita "possibly null" su form.value.rating)
  get ratingValue(): number {
    const v = this.form.get('rating')?.value;
    return typeof v === 'number' ? v : 0;
  }
}
