'use strict';

// * My fixed script

// remove GeekBrains adws
const ads = document.querySelector('.ads');
ads.remove();

// list
const items = document.querySelector('.items');

// item array
const itemAll = items.querySelectorAll('.item');

const one = items.querySelector('.item_one');
const two = items.querySelector('.item_two');
const three = items.querySelector('.item_three');
const four = items.querySelector('.item_four');
const five = items.querySelector('.item_five');
const six = items.querySelector('.item_six');


// *****
// todo two
const twoTitle = two.querySelector('.item__title');
const twoTitleText = twoTitle.textContent;

const twoPropsList = two.querySelector('.props__list');
console.log('twoPropsList: ', twoPropsList);
const propsItemFour = twoPropsList.querySelector('.props__item_four');
console.log('propsItemFour: ', propsItemFour);

propsItemFour.remove();

// todo three
const threeTitle = three.querySelector('.item__title');
const threeTitleText = threeTitle.textContent;
const threePropsList = three.querySelector('.props__list');
// threePropsList.remove();

// todo five
const fiveTitle = five.querySelector('.item__title');
const fiveTitleText = fiveTitle.textContent;
const fivePropsList = five.querySelector('.props__list');
// fivePropsList.remove();
threeTitle.after(fivePropsList);

// todo six
const sixTitle = six.querySelector('.item__title');
const sixTitleText = sixTitle.textContent;
const sixPropsItemTwoAll = six.querySelectorAll('.props__item_two');
console.log('sixPropsItemTwoAll: ', sixPropsItemTwoAll);
sixPropsItemTwoAll.forEach((propsItem) => {
  twoPropsList.append(propsItem);
});

// todo four
const fourPropsList = four.querySelector('.props__list');
console.log('fourPropsList: ', fourPropsList);
const fourPropsItemAll = fourPropsList.querySelectorAll('.props__item');
console.log('fourPropsItemAll [2]: ', fourPropsItemAll[2]);
fourPropsItemAll[2].after(propsItemFour);


twoTitle.textContent = fiveTitleText;
threeTitle.textContent = 'This и прототипы объектов'; // todo
fiveTitle.textContent = sixTitleText;
sixTitle.textContent = twoTitleText;

fiveTitle.after(threePropsList);
console.log('fiveTitle: ', fiveTitle);


// ** ТЕПЕРЬ В ПРАВИЛЬНОМ ПОРЯДКЕ **
// remove all items in forEach
itemAll.forEach((item) => {
  item.remove();
});

// в правильном порядке
items.append(one);
items.append(two);
items.append(three);
items.append(four);
items.append(five);
items.append(six);

