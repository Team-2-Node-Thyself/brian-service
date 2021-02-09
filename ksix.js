import http from 'k6/http';
import {Rate} from 'k6/metrics';
import { sleep } from 'k6';

let errorRate = new Rate('errorRate');

export let options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'ramping-arrival-rate',
      startRate: 1,
      timeUnit: '1s',
      preAllocatedVUs: 100,
      maxVUs: 1000,
      stages: [
        {target: 10, duration: '30s'},
        {target: 100, duration: '30s'},
        {target: 500, duration: '30s'},
        {target: 1000, duration: '30s'},
        {target: 2000, duration: '30s'}
      ]
    }
  }
};

export default function() {
//   let random = Math.floor(Math.random() * (8700999 - 1 + 1) + 1);
  let res = http.get('http://localhost:8003/api/products/1');
  //   sleep(1);
  errorRate.add(res.status >= 400);
}