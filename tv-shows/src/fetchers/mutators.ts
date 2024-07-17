import { swrKeys } from "./swrKeys";

export async function mutator(url: string, { arg }: { arg: any }) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`Error mutating data on ${url}`);
  }

  if (response.ok && url === swrKeys.signIn) {
    // Set access token in local storage
    const accessToken = response.headers.get("access-token");
    if (accessToken) {
      localStorage.setItem("access-token", accessToken);
    }

    // Set client in local storage
    const client = response.headers.get("client");
    if (client) {
      localStorage.setItem("client", client);
    }

    // set uid in local storage
    const uid = response.headers.get("uid");
    if (uid) {
      localStorage.setItem("uid", uid);
    }

    // set expiry in local storage
    const expiry = response.headers.get("expiry");
    if (expiry) {
      localStorage.setItem("expiry", expiry);
    }
  }

  return await response.json();
}
