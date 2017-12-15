import areaData from 'china-area-data';
/* eslint-disable */
/**
 * 获取省份
 */
export const province = Object.values(areaData[86]);

/**
 * @description  获取城市
 * @author (Vhen)
 * @param {string} province 省
 * @returns
 */
export function getCity(province) {
  let provinceCode;
  for (let i in areaData[86]) {
    if (province === areaData[86][i]) {
        provinceCode = i;
        break;
      }
    }
    return Object.values(areaData[provinceCode]);
  }
  /**
   * 获取地区
   * @param {string} province 省
   * @param {string} city  市
   */
  export function getArea(province, city) {
    let provinceCode, cityCode;
    for (let i in areaData[86]) {
      if (province === areaData[86][i]) {
        provinceCode = i
        break
      }
    }

    for (let i in areaData[provinceCode]) {
      if (city === areaData[provinceCode][i]) {
        cityCode = i
        break
      }
    }

    if (areaData[cityCode]) {
      return Object.values(areaData[cityCode])
    } else {
      // 只有两级的情况
      return []
    }
  }
