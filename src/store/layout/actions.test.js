import { Types, Creators } from "./index";

describe("Layout Actions", () => {
  describe("Actions Types", () => {
    test("deve retornar a action SHOW_MESSAGE", () => {
      expect(Types.SHOW_MESSAGE).toEqual("SHOW_MESSAGE");
    });
    test("deve retornar a action HIDE_MESSAGE", () => {
      expect(Types.HIDE_MESSAGE).toEqual("HIDE_MESSAGE");
    });
  });
  describe("Actions Creators", () => {
    test("deve retornar a action creator SHOW_MESSAGE { type: SHOW_MESSAGE }", () => {
      expect(Creators.showMessage()).toEqual({ type: Types.SHOW_MESSAGE });
    });
    test("deve retornar a action creator HIDE_MESSAGE { type: HIDE_MESSAGE }", () => {
      expect(Creators.hideMessage()).toEqual({ type: Types.HIDE_MESSAGE });
    });
  });
});
