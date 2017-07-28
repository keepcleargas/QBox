// load Util class
import Util from './util';

// commonJs load modules
const rp = require('request-promise');

/**
 * Qiniu module to implement all apis.
 */
export default class Qiniu {
  /**
   * list all buckets
   * @param ak   accessKey
   * @param sk   secretKey
   */
  static async buckets(ak, sk) {
    const mac = {
      accessKey: ak,
      secretKey: sk,
    };
    const requestURI = 'http://rs.qbox.me/buckets';
    const reqBody = '';
    const accessToken = Util.generateAccessToken(mac, requestURI, reqBody);

    const options = {
      uri: requestURI,
      headers: {
        Authorization: accessToken,
      },
      json: true,
    };

    return rp(options);
  }

  /**
   * list all files in a bucket
   * @param ak     accessKey
   * @param sk     secretKey
   * @param bucket bucket name
   */
  static async list(ak, sk, bucket) {
    const mac = {
      accessKey: ak,
      secretKey: sk,
    };
    const requestURI = `http://rsf.qbox.me/list?bucket=${bucket}`;
    const reqBody = '';
    const accessToken = Util.generateAccessToken(mac, requestURI, reqBody);

    const options = {
      uri: requestURI,
      headers: {
        Authorization: accessToken,
      },
      json: true,
    };

    return rp(options);
  }

  /**
   * list the domain of a bucket
   * @param ak     accessKey
   * @param sk     secretKey
   * @param bucket bucket name
   */
  static async domain(ak, sk, bucket) {
    const mac = {
      accessKey: ak,
      secretKey: sk,
    };
    const requestURI = `http://api.qiniu.com/v6/domain/list?tbl=${bucket}`;
    const reqBody = '';
    const accessToken = Util.generateAccessToken(mac, requestURI, reqBody);

    const options = {
      uri: requestURI,
      headers: {
        Authorization: accessToken,
      },
      json: true,
    };

    return rp(options);
  }
}
