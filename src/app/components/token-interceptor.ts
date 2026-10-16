import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const fullToken = localStorage.getItem("token");
  const newReq = req.clone({
    setHeaders:{
      Authorization:`Bearer ${fullToken}`
    }
  })
  

  return next(newReq);
};
