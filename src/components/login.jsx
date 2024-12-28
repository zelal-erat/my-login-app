// src/components/Login.jsx
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validatePassword = (password) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    
    if (!validateEmail(email)) {
      validationErrors.email = "Geçerli bir e-posta adresi girin.";
    }

    if (!validatePassword(password)) {
      validationErrors.password = "Şifre en az 8 karakter, bir harf ve bir rakam içermelidir.";
    }

    if (!accepted) {
      validationErrors.accepted = "Şartları kabul etmeniz gerekmektedir.";
    }

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Başarılı form submission
      alert("Giriş başarılı!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">E-posta:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      
      <div>
        <label htmlFor="password">Şifre:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errors.password && <span>{errors.password}</span>}
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={accepted}
            onChange={() => setAccepted(!accepted)}
          />
          Şartları kabul ediyorum
        </label>
        {errors.accepted && <span>{errors.accepted}</span>}
      </div>

      <button type="submit" disabled={Object.keys(errors).length > 0}>
        Giriş Yap
      </button>
    </form>
  );
};

export default Login;
