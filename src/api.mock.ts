import webpackMockServer from "webpack-mock-server";
import apiEndpoints from "./api.endpoints";
import { Filters, UserMockData } from "./types";
import filterGames from "./utils/filterGames";

const gamesMockData = [
  {
    id: 1,
    name: "Counter-Strike",
    price: 29.99,
    image: "",
    rating: 3,
    platforms: ["pc"],
    genre: "Shooter",
    minAge: 18,
    addDate: new Date("2023-01-02"),
    description:
      "Counter-Strike is a series of multiplayer tactical first-person shooter video games in which teams of terrorists battle to perpetrate an act of terror while counter-terrorists try to prevent it.",
  },
  {
    id: 2,
    name: "Battlefield",
    price: 30.99,
    image: "",
    rating: 3,
    platforms: ["ps5"],
    genre: "Shooter",
    minAge: 12,
    addDate: new Date("2023-01-01"),
    description:
      "Battlefield is a series of first-person shooter video games developed by Swedish company EA DICE and is published by American company Electronic Arts. It started out on Microsoft Windows and OS X with Battlefield 1942, which was released in 2002.",
  },
  {
    id: 3,
    name: "GTA",
    price: 18.99,
    image: "",
    rating: 3,
    platforms: ["xbox"],
    genre: "Arcade",
    minAge: 6,
    addDate: new Date("2023-01-01"),
    description:
      "GTA is a series of action-adventure games created by David Jones and Mike Daily. Later titles were developed under the oversight of brothers Dan and Sam Houser. It is primarily developed by British development house Rockstar North (formerly DMA Design), and published by its American parent company, Rockstar Games.",
  },
  {
    id: 4,
    name: "Genshin Impact",
    price: 13.99,
    image: "",
    rating: 5,
    platforms: ["pc", "xbox"],
    genre: "Survive",
    minAge: 3,
    addDate: new Date("2023-01-03"),
    description:
      "Genshin Impact is an action role-playing game developed by miHoYo, published by miHoYo in mainland China. It was released for Android, iOS, PlayStation 4, and Windows in 2020, and on PlayStation 5 in 2021.",
  },
  {
    id: 5,
    name: "Sims 4",
    price: 30.99,
    image: "",
    rating: 5,
    platforms: ["pc", "ps5"],
    genre: "Arcade",
    minAge: 3,
    addDate: new Date("2023-01-01"),
    description:
      "The Sims 4 is a free-to-play social simulation game developed by Maxis and published by Electronic Arts. It is the fourth major title in The Sims series, following The Sims 3 (2009).",
  },
  {
    id: 6,
    name: "Minecraft",
    price: 25.99,
    image: "",
    rating: 5,
    platforms: ["pc", "ps5", "xbox"],
    genre: "Arcade",
    minAge: 3,
    addDate: new Date("2023-01-05"),
    description:
      "Minecraft is a game made up of blocks, creatures, and community. Blocks can be used to reshape the world or build fantastical creations. Creatures can be battled or befriended, depending on your playstyle.",
  },
  {
    id: 7,
    name: "Terraria",
    price: 4.99,
    image: "",
    rating: 1,
    platforms: ["pc", "ps5", "xbox"],
    genre: "Arcade",
    minAge: 3,
    addDate: new Date("2023-01-04"),
    description:
      "The very world is at your fingertips as you fight for survival, fortune, and glory. Delve deep into cavernous expanses, seek out ever-greater foes to test your mettle in combat, or construct your own city - In the World of Terraria, the choice is yours!",
  },
  {
    id: 8,
    name: "Overwatch",
    price: 23.99,
    image: "",
    rating: 1,
    platforms: ["pc", "xbox"],
    genre: "Shooter",
    minAge: 6,
    addDate: new Date("2023-01-06"),
    description:
      "Overwatch 2 is a free-to-play shooter featuring 30+ epic heroes, each with game-changing abilities. Choose your hero, group up with your friends and battle across all-new maps and modes in the ultimate team-based shooter.",
  },
];

const usersMockData: UserMockData[] = [
  {
    id: 1,
    username: "ghristov",
    address: "Sofia, Bulgaria",
    phone: "359123456789",
    description: "Profile description for username ghristov",
    password: "123",
    balance: 500,
    isAdmin: true,
  },
];

let currentUser: UserMockData = {};
let filters: Filters;

export default webpackMockServer.add((app) => {
  app.get(apiEndpoints.search, (req, res) => {
    const searchText = (req.query.text as string).toLowerCase();
    const matchingProducts = gamesMockData.filter((game) => game.name.toLowerCase().includes(searchText));
    res.json(matchingProducts);
  });

  app.get(apiEndpoints.topGames, (_req, res) => {
    const top3RecentlyAddedGames = gamesMockData.sort((a, b) => b.addDate.getTime() - a.addDate.getTime()).slice(0, 3);
    res.json(top3RecentlyAddedGames);
  });

  app.post(apiEndpoints.login, (req, res) => {
    const { username } = req.body;
    const existingUser = usersMockData.find((user) => user.username === username.toLowerCase());
    if (existingUser) {
      currentUser = { ...existingUser, password: null };
    } else {
      currentUser = { ...usersMockData[0], password: null };
    }
    res.status(200).json({ username: currentUser.username, isAdmin: currentUser.isAdmin });
  });

  app.put(apiEndpoints.register, (req, res) => {
    const { username, password, rePassword } = req.body;
    if (usersMockData.some((user) => user.username === username.toLowerCase())) {
      res.status(400).json("Register failed: Username already exists!");
      return;
    }

    if (password !== rePassword) {
      res.status(400).json("Register failed: Passwords must match!");
      return;
    }
    const lastUser = usersMockData[usersMockData.length - 1];
    const id = lastUser?.id ? lastUser.id + 1 : 1;
    const user = {
      id,
      username: username.toLowerCase(),
      address: "",
      phone: "",
      description: "",
      password,
      balance: 500,
      isAdmin: false,
    };
    currentUser = { ...user, password: null };
    usersMockData.push(user);
    res.status(201).json({ username: user.username, isAdmin: user.isAdmin });
  });

  app.post(apiEndpoints.logout, (_req, res) => {
    currentUser = {};
    res.json("success");
  });

  app.get(apiEndpoints.getProfile, (_req, res) => {
    res.json(currentUser);
  });

  app.put(apiEndpoints.saveProfile, (req, res) => {
    const { username, address, phone, description } = req.body;
    if (currentUser.username !== username && usersMockData.some((user) => user.username === username.toLowerCase())) {
      res.status(400).json("Update failed: Username already exists!");
      return;
    }

    usersMockData.forEach((user, index) => {
      if (user.username === currentUser.username) {
        usersMockData[index] = { ...user, username, address, phone, description };
        currentUser = { ...currentUser, username, address, phone, description };
      }
    });

    res.json({ username: currentUser.username });
  });

  app.put(apiEndpoints.updateBalance, (req, res) => {
    const { balance } = req.body;

    usersMockData.forEach((user, index) => {
      if (user.username === currentUser.username) {
        usersMockData[index] = { ...user, balance };
        currentUser = { ...currentUser, balance };
      }
    });

    res.json("success");
  });

  app.get(apiEndpoints.getProducts, (req, res) => {
    const { category, searchText, sortCriteria, sortType, genre, minAge } = req.query;

    filters = {
      category: category as string,
      searchText: searchText as string,
      sortCriteria: sortCriteria as string,
      sortType: sortType as string,
      genre: genre as string,
      minAge: minAge as string,
    };

    res.json(filterGames(gamesMockData, filters));
  });
});
