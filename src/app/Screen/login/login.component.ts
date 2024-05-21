import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: string = '';
  password: string = '';
  image: string | ArrayBuffer | null = null; // Variable to store the uploaded image
  music: string | ArrayBuffer | null = null; // Variable to store the uploaded music
  isMusicPlaying: boolean = false; // Variable to track the state of music playback

  @ViewChild('audioControl', { static: false }) audioControl!: ElementRef<HTMLAudioElement>;

  constructor() {}

  ngOnInit(): void {}

  loginField(event: any) {
    this.login = event?.target.value;
  }

  passField(event: any) {
    this.password = event?.target.value;
  }

  uploadImage(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.image = e.target?.result || null; // Assign null if result is undefined
      };
      reader.readAsDataURL(file);
    }
  }

  uploadMusic(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.music = e.target?.result || null; // Assign null if result is undefined
      };
      reader.readAsDataURL(file);
    }
  }

  toggleMusic(event: any) {
    this.isMusicPlaying = event.target.checked;
    if (this.isMusicPlaying) {
      this.audioControl.nativeElement.play();
    } else {
      this.audioControl.nativeElement.pause();
    }
  }

  SubmitForm() {
    localStorage.setItem(this.login, 'login');
    localStorage.setItem(this.password, 'password');
    this.showModal();
  }

  showModal() {
    const modalElement = document.getElementById('loginModal');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();
  }
}
