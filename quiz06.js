// ## 6. 장바구니 뒤바뀜 문제

// 아래 코드는 두 명의 유저(유저 A, 유저 B)가 각각 장바구니를 가지고 있다고 가정한 예시입니다.

// B 유저에게 할인 쿠폰을 적용하려고 applyCoupon 함수를 만들었습니다.

// ```javascript
// function applyCoupon(cart, coupon) {
//   cart.items.forEach((item) => {
//     item.price -= coupon.discount;
//   });
// }

// const userACart = {
//   items: [
//     { name: "키보드", price: 30000 },
//     { name: "마우스", price: 20000 },
//   ],
// };

// const userBCart = userACart;
// const coupon = { discount: 5000 };

// applyCoupon(userBCart, coupon);
// ```

// 1.	실행 결과로 userACart.items와 userBCart.items는 각각 어떻게 달라져 있을까요?
//둘 모두
{ name: "키보드", price: 25000 },
{ name: "마우스", price: 15000 },

// 2.	1번의 결과에 대한 이유를 설명해보세요.
//아이템 가격(item.price)에서 각각 할인가(coupon.discount)만큼 빼야함
30000 - 5000 //{ name: "키보드", price: 25000 }
20000 - 5000 //{ name: "마우스", price: 15000 }
//a카트 = b카트 이기때문에 a카트에도 적용됨

// 3.	원래 의도대로라면 유저 A와 유저 B 장바구니가 독립적으로 동작해야 하는데, 그렇게 하려면 코드를 어떻게 수정해야 할까요?
//새로 만들어주기

function applyCoupon(cart, coupon) {
    cart.items.forEach((item) => {
      item.price -= coupon.discount;
    });
  }

const userACart = {
items: [
    { name: "키보드", price: 30000 },
    { name: "마우스", price: 20000 },
],
};

const userBCart = {
  items: [
    { name: "키보드", price: 30000 },
    { name: "마우스", price: 20000 },
  ],
};

const coupon = { discount: 5000 };
applyCoupon(userBCart, coupon);

console.log(userACart.items);
console.log(userBCart.items);