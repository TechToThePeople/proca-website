import React, { useRef, useEffect } from "react"
//import * as typeformEmbed from "@typeform/embed"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeadSection from "../components/home/HeadSection"
import {Grid,Container,Box} from "@material-ui/core";

//import { Form } from "../components/widget/Widget"

//const Page = () => <Form margin="dense" variant="filled />
const Page = () => {
  const typeformRef = useRef(null)

  useEffect(() => {
    ;(function () {
      var qs,
        js,
        q,
        s,
        d = document,
        gi = d.getElementById,
        ce = d.createElement,
        gt = d.getElementsByTagName,
        id = "typef_orm",
        b = "https://embed.typeform.com/"
      if (!gi.call(d, id)) {
        js = ce.call(d, "script")
        js.id = id
        js.src = b + "embed.js"
        q = gt.call(d, "script")[0]
        q.parentNode.insertBefore(js, q)
      }
    })()


  }, [typeformRef])

  return (
<Layout><Container>
      <SEO title="Join the #noECT campaign" />
    <Grid container className="blog-post-container" spacing={2}>
    <Grid item className="blog-post"><Box mt={10}>
      <h1>Join the #NoECT campaign</h1>
    <p>Please answer a few questions for our system to generate the widget to add on your site.</p>
    <div class="typeform-widget" 
    data-url="https://form.typeform.com/to/KiMZ1Elr?typeform-medium=embed-snippet" 
    style={{width: "100%", height: "600px"}}>
    </div>
    </Box></Grid>
    </Grid>
</Container>    </Layout>
  )
}
export default Page
