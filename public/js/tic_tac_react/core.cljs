(ns tic-tac-react.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as a :refer [<! >! chan put! take! sliding-buffer]]
            [om.core :as om]
            [om.dom :as dom :include-macros true]))

(om/root
  {}
  (fn [state]
    (reify
      dom/IRender
      (-render [this _]
        (dom/div nil
                 (dom/label nil "Search!")))))
  js/document.body)



