"use strict";

const itemList = document.querySelector(".itemList");
const pinkBtn = document.querySelector(".icons .pink_Btn");
const yellowBtn = document.querySelector(".icons .yellow_Btn");
const blueBtn = document.querySelector(".icons .blue_Btn");
const t_icon = document.getElementById("t_icon");
const p_icon = document.getElementById("p_icon");
const s_icon = document.getElementById("s_icon");

const cloths = [
  { cloth: "t", color: "pink", sex: "female", size: "large" },
  { cloth: "p", color: "pink", sex: "male", size: "large" },
  { cloth: "s", color: "pink", sex: "female", size: "large" },
  { cloth: "t", color: "pink", sex: "female", size: "small" },
  { cloth: "p", color: "pink", sex: "male", size: "small" },
  { cloth: "s", color: "pink", sex: "female", size: "small" },

  { cloth: "t", color: "blue", sex: "female", size: "large" },
  { cloth: "p", color: "blue", sex: "male", size: "large" },
  { cloth: "s", color: "blue", sex: "female", size: "large" },
  { cloth: "t", color: "blue", sex: "female", size: "small" },
  { cloth: "p", color: "blue", sex: "male", size: "small" },
  { cloth: "s", color: "blue", sex: "female", size: "small" },

  { cloth: "t", color: "yellow", sex: "female", size: "large" },
  { cloth: "p", color: "yellow", sex: "male", size: "large" },
  { cloth: "s", color: "yellow", sex: "female", size: "large" },
  { cloth: "t", color: "yellow", sex: "female", size: "small" },
  { cloth: "p", color: "yellow", sex: "male", size: "small" },
  { cloth: "s", color: "yellow", sex: "female", size: "small" },
];
const addChildToItemList = (itemList, items) => {
  //itemList 초기 item 생성
  for (const item of items) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML =
      '<img src= "/imgs/' +
      item.color +
      "_" +
      item.cloth +
      '.png" />' +
      "<span>" +
      item.sex +
      ", " +
      item.size +
      " size</span>";
    itemList.appendChild(newDiv);
  }
};

//init itemList
addChildToItemList(itemList, cloths);

//click event declaration
pinkBtn.addEventListener("click", (event) => {
  removeAllChild(itemList);
  const newChildofList = filterByColor("pink", cloths);
  addChildToItemList(itemList, newChildofList);
});
blueBtn.addEventListener("click", (event) => {
  removeAllChild(itemList);
  const newChildofList = filterByColor("blue", cloths);
  addChildToItemList(itemList, newChildofList);
});
yellowBtn.addEventListener("click", (event) => {
  removeAllChild(itemList);
  const newChildofList = filterByColor("yellow", cloths);
  addChildToItemList(itemList, newChildofList);
});

t_icon.addEventListener("click", (event) => {
  removeAllChild(itemList);
  const newChildofList = filterByCloth("t", cloths);
  addChildToItemList(itemList, newChildofList);
});
p_icon.addEventListener("click", (event) => {
  removeAllChild(itemList);

  const newChildofList = filterByCloth("p", cloths);
  addChildToItemList(itemList, newChildofList);
});
s_icon.addEventListener("click", (event) => {
  removeAllChild(itemList);
  const newChildofList = filterByCloth("s", cloths);
  addChildToItemList(itemList, newChildofList);
});

//function declaration
const removeAllChild = (itemList) => {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
};

const filterByColor = (color, items) => {
  const newitems = [];
  for (const item of items) {
    if (item.color === color) {
      newitems.push(item);
    }
  }
  return newitems;
};

const filterByCloth = (cloth, items) => {
  const newItems = [];
  for (const item of items) {
    if (item.cloth === cloth) {
      newItems.push(item);
    }
  }
  return newItems;
};
