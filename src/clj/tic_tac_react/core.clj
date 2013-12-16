(ns tic-tac-react.core
  (:require [clojure.core.async :as a :refer [>! <! go]]
            [org.httpkit.server :as s]
            [compojure.handler :as h]
            [compojure.route :as route]
            [compojure.core :refer [defroutes GET]]))

(defn ws-handler [request]
  (s/with-channel request channel
    (s/on-close channel (fn [status]
                          (println "channel CLOSED: " status)))
    (s/on-receive channel (fn [data] ;; echo it back
                            (println "Got a client!")
                            (s/send! channel data)))))

(defroutes all-routes
  (GET "/ws" [] ws-handler)
  (route/files "/"))

(defn -main [& args]
  (s/run-server (h/site all-routes) {:port 8080}))
