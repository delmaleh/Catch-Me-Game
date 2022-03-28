var menu = null;


function createMenu() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const menu = [
        { path: "home", title: "HOME" },
        { path: "dashboard", title: "DASHBOARD" },
        { path: "contact", title: "CONTACT" },
        { path: "logout", title: "LOGOUT" },
      ];
      resolve(menu);
    }, 2000);
  });
}

export { createMenu, menu };
