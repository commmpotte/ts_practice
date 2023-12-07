"use strict";
// interface IPayment {
//   sum: number
//   from: number
//   to: number
// }
// interface IPaymentRequest extends IPayment {}
// enum PaymentStatus {
//   Success = 'success',
//   Failed = 'failed',
// }
// interface IDataSuccess extends IPayment {
//   databaseId: number
// }
// interface IDataFailed {
//   errorMessage: string
//   errorCode: number
// }
// interface IResponseSuccess {
//   status: PaymentStatus.Success
//   data: IDataSuccess
// }
// interface IResponseFailed {
//   status: PaymentStatus.Failed
//   data: IDataFailed
// }
// type Res = IResponseSuccess | IResponseFailed
// type f = (res: Res) => number
// function isSuccess(res: Res): res is IResponseSuccess {
//   if (res.status === PaymentStatus.Success) {
//     return true
//   }
//   return false
// }
// function getIdFromData(res: Res): number {
//   if (isSuccess(res)) {
//     return res.data.databaseId
//   } else {
//     throw new Error(res.data.errorMessage)
//   }
// }
