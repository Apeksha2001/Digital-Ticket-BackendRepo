import findDirectRoute from "./directRoute.js";

const findSmartRoute = (source, destination) => {
  return findDirectRoute(source, destination).sort((a, b) => {
    return a.stops.length - b.stops.length;
  });
};

export default findSmartRoute;
