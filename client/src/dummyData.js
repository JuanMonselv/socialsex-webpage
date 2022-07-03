import cover1 from "./assets/img/covers/cover1.jpg";
import cover2 from "./assets/img/covers/cover2.jpg";
import cover3 from "./assets/img/covers/cover3.jpg";
import cover4 from "./assets/img/covers/cover4.jpg";
import cover5 from "./assets/img/covers/cover5.jpg";
import cover6 from "./assets/img/covers/cover6.jpg";

import person1 from "./assets/img/persons/person1.jpg";
import person2 from "./assets/img/persons/person2.jpg";
import person3 from "./assets/img/persons/person3.jpg";
import person4 from "./assets/img/persons/person4.jpg";
import person5 from "./assets/img/persons/person5.jpg";
import person6 from "./assets/img/persons/person6.jpg";

export default {
    "cover1": cover1,
    "cover2": cover2,
    "cover3": cover3,
    "cover4": cover4,
    "cover5": cover5,
    "cover6": cover6,

    "person1": person1,
    "person2": person2,
    "person3": person3,
    "person4": person4,
    "person5": person5,
    "person6": person6,
};

export const Users = [
    {
        id: 1,
        profilePicture: person1,
        username: "Juan Monselv",
    },

    {
        id: 2,
        profilePicture: person2,
        username: "Francisco Amariles",
    },

    {
        id: 3,
        profilePicture: person3,
        username: "Liliana Mejia",
    },

    {
        id: 4,
        profilePicture: person4,
        username: "Felipe Quintero",
    },

    {
        id: 5,
        profilePicture: person5,
        username: "Gustavo Petro",
    },

    {
        id: 6,
        profilePicture: person6,
        username: "Francia Marquez",
    },

    {
        id: 7,
        profilePicture: person2,
        username: "Antanas Mokus",
    },

    {
        id: 8,
        profilePicture: person4,
        username: "Jorge Eliecer",
    },

    {
        id: 9,
        profilePicture: person5,
        username: "Carlos Galan",
    },
];

export const Posts = [
    {
        id: 1,
        photo: cover1,
        date: " 12 mins ago",
        userId: 1,
        like: 32,
        comment: 9,
    },

    {
        id: 2,
        desc: "Hello this is a common post",
        photo: cover2,
        date: " 12 mins ago",
        userId: 2,
        like: 2,
        comment: 9,
    },

    {
        id: 3,
        desc: "Hello this is a common post",
        photo: cover3,
        date: " 9 mins ago",
        userId: 3,
        like: 16,
        comment: 9,
    },

    {
        id: 4,
        desc: "Hello this is a common post",
        photo: cover4,
        date: " 34 mins ago",
        userId: 4,
        like: 11,
        comment: 9,
    },

    {
        id: 5,
        photo: cover5,
        date: " 5 mins ago",
        userId: 5,
        like: 33,
        comment: 9,
    },

    {
        id: 6,
        desc: "Hello this is a common post",
        photo: cover6,
        date: " 12 mins ago",
        userId: 6,
        like: 32,
        comment: 9,
    },

    {
        id: 7,
        photo: cover3,
        date: " 4 mins ago",
        userId: 7,
        like: 13,
        comment: 9,
    },

    {
        id: 8,
        photo: cover1,
        date: " 3 mins ago",
        userId: 8,
        like: 39,
        comment: 9,
    },

    {
        id: 9,
        desc: "Hello this is a common post",
        photo: cover5,
        date: " 12 mins ago",
        userId: 9,
        like: 13,
        comment: 9,
    },
];
