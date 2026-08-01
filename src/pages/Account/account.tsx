import { FormEvent, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./account.scss";

type AccountMode = "login" | "register";

const Account = () => {
  const [mode, setMode] = useState<AccountMode>("login");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const isLogin = mode === "login";

  return (
    <>
      <Navbar />
      <main className="account-page">
        <section className="account-card" aria-labelledby="account-title">
          <div className="account-tabs" role="tablist" aria-label="Account options">
            <button
              className={isLogin ? "active" : ""}
              type="button"
              role="tab"
              aria-selected={isLogin}
              onClick={() => setMode("login")}
            >
              Login
            </button>
            <button
              className={!isLogin ? "active" : ""}
              type="button"
              role="tab"
              aria-selected={!isLogin}
              onClick={() => setMode("register")}
            >
              Registar
            </button>
          </div>

          <h1 id="account-title">{isLogin ? "Bem-vindo de volta" : "Criar conta"}</h1>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <label>
                Nome de utilizador
                <input name="username" type="text" autoComplete="username" required />
              </label>
            )}
            <label>
              Email
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Palavra-passe
              <input name="password" type="password" autoComplete={isLogin ? "current-password" : "new-password"} required />
            </label>
            <button className="account-submit" type="submit">
              {isLogin ? "Entrar" : "Criar conta"}
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Account;
