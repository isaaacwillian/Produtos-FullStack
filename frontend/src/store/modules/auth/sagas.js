import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { api } from "../../../services/api";
import { turnAuthTrueFailure, turnAuthTrueSuccess } from "./action";

function* checkAuthentication() {
  try {
    yield call(api.get, "/product/getAll", { withCredentials: true });
    yield put(turnAuthTrueSuccess());
  } catch (error) {
    yield put(turnAuthTrueFailure());
  }
}

export default all([takeLatest("TURN_AUTH_TRUE_REQUEST", checkAuthentication)]);
