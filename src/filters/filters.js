import dayjs from "dayjs";
import accounting from 'accounting-js';

export default {
  dayjs(time, pattern = 'YYYY/MM/DD HH:mm:ss') {
    return dayjs(time).format(pattern)
  },
  formatNumber(number) {
    return accounting.formatNumber(number)
  }
}