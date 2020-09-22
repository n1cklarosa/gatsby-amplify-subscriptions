// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import "prismjs/themes/prism.css"
import '@stripe/stripe-js'

import Amplify from "aws-amplify"
import awsconfig from "./src/aws-exports"
Amplify.configure(awsconfig)