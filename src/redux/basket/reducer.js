const initialState = {
  cartGoods: [],
  goods: [
    {
      id: 0,
      title: "Logitech C920 Hd Pro Webcam",
      description:
        "Full HD 1080p video that's faster, smoother and works on more computers. Skype in Full HD 1080p Get breathtaking Full HD 1080p video calls on Skype for the sharpest video-calling experience. Smoother. Sharper. Richer. Clearer. Logitech Fluid Crystal Technology. It's what makes a Logitech webcam better.",
      price: 120,
    },
    {
      id: 1,
      title: "Logitech USB Headset H390 with Noise Cancelling Mic",
      description:
        "Padded headband and ear pads. Frequency response (Microphone): 100 hertz - 10 kilohertz Rotating, noise canceling microphone. Sensitivity (headphone) 94 dBV/Pa +/ 3 dB. Sensitivity (microphone) 17 dBV/Pa +/ 4 dB",
      price: 50,
    },
    {
      id: 2,
      title: "Anker PowerCore 10000 Portable Charger",
      description:
        "One of The Smallest and Lightest 10000mAh Power Bank, Ultra-Compact Battery Pack, High-Speed Charging Technology Phone Charger for iPhone, Samsung and More.",
      price: 150,
    },
  ],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_GOOD":
      const isHave = state.cartGoods.find(
        (cartGood) => cartGood.id === action.payload.id
      );
      if (!isHave) {
        return {
          ...state,
          cartGoods: [...state.cartGoods, { ...action.payload, amount: 1 }],
        };
      } else {
        const filteredGood = state.cartGoods.filter(
          (item) => item.id === action.payload.id
        );
        filteredGood[0].amount += 1;
        return {
          ...state,
          cartGoods: [
            ...state.cartGoods.filter((item) => item.id !== action.payload.id),
            ...filteredGood,
          ],
        };
      }
    case "REMOVE-ITEM":
      const getItem = state.cartGoods.filter(
        (item, index) => index === action.payload.index
      )[0];
      if (getItem.amount === 1) {
        getItem.amount -= 1;
        return {
          ...state,
          cartGoods: [
            ...state.cartGoods.filter(
              (item, index) => index !== action.payload.index
            ),
          ],
        };
      } else {
        getItem.amount -= 1;
        return {
          ...state,
          cartGoods: [...state.cartGoods],
        };
      }
    default:
      return state;
  }
};
export default basketReducer;
