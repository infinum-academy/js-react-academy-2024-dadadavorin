export async function fetcher<T>(
  input: string | URL | globalThis.Request,
  init?: RequestInit
): Promise<T> {
  const accessToken = localStorage.getItem("access-token");
  const client = localStorage.getItem("client");
  const uid = localStorage.getItem("uid");
  const expiry = localStorage.getItem("expiry");

  const headers = {
    ...init?.headers,
    "Content-Type": "application/json",
    Accept: "application/json",
    "access-token": accessToken || "",
    client: client || "",
    uid: uid || "",
    expiry: expiry || "",
  };

  try {
    const response = await fetch(input, {
      ...init,
      headers,
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw new Error(`Response status: ${error}`);
  }
}
