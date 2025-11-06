import axios from "axios";

/* ================== CONFIG ================== */

// Your Spring Boot backend URL
// If backend runs on port 8081, keep as is.
// If it’s deployed and exposed on 30083, change below line accordingly.
const API_BASE_URL = "http://localhost:8081";

// Separate base URLs for clarity
const USER_API_URL = `${API_BASE_URL}/api/users`;
const QUIZ_API_URL = `${API_BASE_URL}/api/quizzes`;

/* ---------------- USER APIs ---------------- */

// Signup
export async function signup(data) {
  const res = await axios.post(`${USER_API_URL}/signup`, data);
  return res.data;
}

// Login
export async function login(data) {
  const res = await axios.post(`${USER_API_URL}/login`, data);
  return res.data;
}

// Get all users
export async function getAllUsers() {
  const res = await axios.get(`${USER_API_URL}/all`);
  return res.data;
}

/* ---------------- QUIZ APIs ---------------- */

// Create Quiz
export async function createQuiz(data) {
  const res = await axios.post(QUIZ_API_URL, data);
  return res.data;
}

// Get all quizzes
export async function getAllQuizzes() {
  const res = await axios.get(QUIZ_API_URL);
  return res.data;
}

// Get quizzes created by current user
export async function getMyQuizzes(username) {
  const res = await axios.get(`${QUIZ_API_URL}/myquizzes/${username}`);
  return res.data;
}

// Delete quiz
export async function deleteQuiz(quizId) {
  await axios.delete(`${QUIZ_API_URL}/${quizId}`);
}

// Get one quiz (with questions)
export async function getQuizById(id) {
  const res = await axios.get(`${QUIZ_API_URL}/${id}`);
  return res.data;
}

// ✅ Get quizzes by domain
export async function getQuizzesByDomain(domain) {
  const res = await axios.get(`${QUIZ_API_URL}/domain/${domain}`);
  return res.data;
}

// Submit quiz answers
export async function submitQuiz(id, submission) {
  const res = await axios.post(`${QUIZ_API_URL}/${id}/submit`, submission);
  return res.data;
}

// Get results of logged-in user
export async function getMyResults(username) {
  const res = await axios.get(`${QUIZ_API_URL}/results/user/${username}`);
  return res.data;
}
