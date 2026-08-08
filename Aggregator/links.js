const profile = {
  name: "Valentim da Costa Piazera",
  username: "@valentimpiazera",
  avatar: "./assets/avatar.jpg",

  links: [
    {
      title: "GitHub",
      url: "https://github.com/valentimpiazera",
      icon: "./assets/icons/github.svg"
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/valentim-da-costa-piazera-4803353a6/",
      icon: "./assets/icons/linkedin.svg"
    },
    {
      title: "Credly",
      url: "https://www.credly.com/users/valentim-da-costa-piazera.1db90657",
      icon: "./assets/icons/credly.svg"
    },
    {
      title: "Kaggle",
      url: "https://www.kaggle.com/valentimpiazera",
      icon: "./assets/icons/kaggle.svg"
    },
    {
      title: "LeetCode",
      url: "https://leetcode.com/u/valentimpiazera/",
      icon: "./assets/icons/leetcode.svg"
    },
    {
      title: "HackerRank",
      url: "https://www.hackerrank.com/valentimpiazera",
      icon: "./assets/icons/hackerrank.svg"
    }
  ]
};

function renderProfile(data) {
  const avatarEl = document.getElementById("avatar");
  const nameEl = document.getElementById("name");
  const usernameEl = document.getElementById("username");
  const linksEl = document.getElementById("links");

  avatarEl.src = data.avatar;
  avatarEl.alt = data.name;

  nameEl.textContent = data.name;
  usernameEl.textContent = data.username;

  document.title = data.name;

  linksEl.innerHTML = "";

  data.links.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.className = "link";
    anchor.href = link.url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";

    const icon = document.createElement("img");
    icon.className = "link-icon";
    icon.src = link.icon;
    icon.alt = "";
    icon.setAttribute("aria-hidden", "true");

    const title = document.createElement("span");
    title.className = "link-title";
    title.textContent = link.title;

    const arrow = document.createElement("span");
    arrow.className = "link-arrow";
    arrow.textContent = "→";
    arrow.setAttribute("aria-hidden", "true");

    anchor.append(icon, title, arrow);
    linksEl.appendChild(anchor);
  });
}

document.addEventListener("DOMContentLoaded", () => renderProfile(profile));