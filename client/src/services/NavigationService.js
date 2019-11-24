let history;

const setHistory = (h) => {
  history = h;
};

const navigate = (route, ...rest) => {
  history.push(route, ...rest);
};

const NavigationService = {
  setHistory,
  navigate,
};

export default NavigationService;
