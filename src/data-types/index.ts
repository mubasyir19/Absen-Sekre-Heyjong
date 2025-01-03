export interface LoginForm {
  username: string;
  password: string;
}

export interface Attendance {
  name: string;
  position: string;
  institution: string;
  purpose: string;
}

export interface ListAttendance {
  createdAt: string;
  name: string;
  position: string;
  institution: string;
  purpose: string;
}
