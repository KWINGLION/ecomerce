const url = "http://localhost:1337/";

export function GET_HOME_CONTENT() {
  return {
    url: url + "home",
    options: {
      method: "GET",
    },
  };
}
export function GET_ABOUT_CONTENT() {
  return {
    url: url + "sobre",
    options: {
      method: "GET",
    },
  };
}
export function GET_PRODUCTS() {
  return {
    url: url + "categorias",
    options: {
      method: "GET",
    },
  };
}
export function GET_FAQ() {
  return {
    url: url + "encomendar",
    options: {
      method: "GET",
    },
  };
}
export function USER_REGISTER(data) {
  return {
    url: url + "auth/local/register",
    options: {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    },
  };
}
export function USER_GET(data) {
  return {
    url: url + "auth/local",
    options: {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    },
  };
}
export function FORGOTTEN_PASSWORD(email) {
  return {
    url: url + "auth/forgot-password",
    options: {
      method: "POST",
      body: JSON.stringify(email),
      headers: {
        "Content-Type": "application/json",
      },
    },
  };
}
export function GET_USERDATA(token) {
  return {
    url: url + "users/me",
    options: {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}
