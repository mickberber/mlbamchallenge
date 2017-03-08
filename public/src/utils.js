const parseMonth = (month) => {
  const monthArr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  for(let i = 0; i < monthArr.length; i++) {
    if(monthArr[i] === month && i < 10) {
      return '0' + (i + 1);
    }
    if(monthArr[i] === month && i >= 10) {
      return (i + 1);
    }
  }
}

export const urlConstructor = () => {
  let date = new Date();
  let dateArr = date.toString().split(' ');
  let baseUrl = 'http://gdx.mlb.com/components/game/mlb/year_' + dateArr[3];
  let month = '/month_' + parseMonth(dateArr[1]);
  let day = '/day_' + dateArr[2];
  let suffix = '/master_scoreboard.json';

  return (baseUrl + month + day + suffix);
  // default url to test with
  // return 'http://gdx.mlb.com/components/game/mlb/year_2016/month_05/day_20/master_scoreboard.json';

}
