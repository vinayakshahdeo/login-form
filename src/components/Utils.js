export async function login({ username, password }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'vinayak' && password === 'password') {
          resolve();
        } else {
          reject();
        }
      }, 1000);// 1000ms to simulate backend api call
    });
  }