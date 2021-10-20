import { check } from "k6";
import http from "k6/http";
export default function() {
  try{
  let res = http.get("http://helloservice.demo.svc.cluster.local:9000/");
  check(res, {
    "is status 200": (r) => r.status === 200
  });
  }catch{
    check(1, {
    "failed to connect": (r) => false
  });
  }
};
