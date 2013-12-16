(defproject tic-tac-react "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2123"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [http-kit "2.1.13"]
                 [ring "1.2.1"]
                 [compojure "1.1.6"]
                 [om "0.1.0"]]

  :plugins [[lein-cljsbuild "1.0.1"]]

  :source-paths ["src/clj"]

  :cljsbuild { 
    :builds [{:id "tic-tac-react"
              :source-paths ["src/cljs"]
              :compiler {
                :output-to "public/js/tic_tac_react.js"
                :output-dir "public/js"
                :optimizations :none
                :source-map true
                :foreign-libs [{:file "om/react.js"
                                :provides ["React"]}]
                :externs ["om/externs/react.js"]}}]})
