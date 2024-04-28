export const players = [
  "Sachin Tendulkar",
  "Virat Kohli",
  "Don Bradman",
  "Brian Lara",
  "Ricky Ponting",
  "Jacques Kallis",
  "Garfield Sobers",
  "Shane Warne",
  "Wasim Akram",
  "Muttiah Muralitharan",
  "Kapil Dev",
  "Allan Border",
  "Vivian Richards",
  "Sunil Gavaskar",
  "Adam Gilchrist",
  "Steve Waugh",
  "Imran Khan",
  "Glenn McGrath",
  "Rahul Dravid",
  "Virender Sehwag",
  "Waqar Younis",
  "Matthew Hayden",
  "Mahela Jayawardene",
  "AB de Villiers",
  "Anil Kumble",
  "Shoaib Akhtar",
  "Shaun Pollock",
  "Sourav Ganguly",
  "Inzamam-ul-Haq",
  "Michael Holding",
  "Brett Lee",
  "Andrew Flintoff",
  "Kumar Sangakkara",
  "Courtney Walsh",
  "Lasith Malinga",
  "Saeed Anwar",
  "Graeme Smith",
  "Kane Williamson",
  "Dale Steyn",
  "Kevin Pietersen",
  "Andy Flower",
  "Makhaya Ntini",
  "Gordon Greenidge",
  "Michael Clarke",
  "Shakib Al Hasan",
  "Shane Bond",
  "MS Dhoni",
  "Hashim Amla",
  "Michael Hussey",
  "Sanath Jayasuriya",
  "Martin Crowe",
  "Steve Smith",
  "Chris Gayle",
].map((each) => each.toLowerCase());

export const searchPlayers = async (keyword) => {
  const resultPlayers = players.filter(
    (player) => player.substr(0, keyword.length).toLowerCase() === keyword
  );
  return new Promise((resolve) =>
    setTimeout(() => resolve(resultPlayers), 500)
  );
};

export const debounce = (fn, delay) => {
  let timerId;
  return function () {
    const self = this;
    const args = arguments;
    clearTimeout(timerId);
    timerId = setTimeout(() => fn.apply(self, args), delay);
  };
};
