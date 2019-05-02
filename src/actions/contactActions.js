import { postContact } from "../lib/api"

export const startAction = {
  type: "rotate",
  payload: true
};

export const sendContact = value => {
  return (dispatch) => {
    postContact()
      .then(res => {
        console.log(res)
      })
      .catch(res => {
        console.log(res)
      })
  }
}