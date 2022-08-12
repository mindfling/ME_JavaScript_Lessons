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


// two
const twoTitle = two.querySelector('.item__title');
const twoTitleText = twoTitle.textContent;
const twoPropsList = two.querySelector('.props__list');
const propsItemFour = twoPropsList.querySelector('.props__item_four');
// propsItemFour.remove();

// three
const threeTitle = three.querySelector('.item__title');
// const threeTitleText = threeTitle.textContent;
const threePropsList = three.querySelector('.props__list');
// threePropsList.remove();

// five
const fiveTitle = five.querySelector('.item__title');
const fiveTitleText = fiveTitle.textContent;
const fivePropsList = five.querySelector('.props__list');
// fivePropsList.remove();
threeTitle.after(fivePropsList);

// six
const sixTitle = six.querySelector('.item__title');
const sixTitleText = sixTitle.textContent;
const sixPropsItemTwoAll = six.querySelectorAll('.props__item_two');
sixPropsItemTwoAll.forEach((propsItem) => {
  twoPropsList.append(propsItem);
});

// four
const fourPropsList = four.querySelector('.props__list');
const fourPropsItemAll = fourPropsList.querySelectorAll('.props__item');
fourPropsItemAll[2].after(propsItemFour);

twoTitle.textContent = fiveTitleText;
threeTitle.textContent = 'This и прототипы объектов';
fiveTitle.textContent = sixTitleText;
sixTitle.textContent = twoTitleText;

fiveTitle.after(threePropsList);


// ** Теперь в правильном порядке **
itemAll.forEach((item) => {
  item.remove();
});

items.append(one, two, three, four, five, six);

