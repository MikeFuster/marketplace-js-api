// Add Express
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios").default;

// Initialize Express
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// Get a token by creating an app in the `Your Applications` section inside any integration
const TOKEN =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImNsdC1kYjI0MDBmNzU3YTI0NDM5In0.eyJpc3MiOiJpc3MtY2x0LWRiMjQwMGY3NTdhMjQ0MzkiLCJpYXQiOjE2NTIxMDAyMzksImV4cCI6OTk5OTk5OTk5OSwic3ViIjoiY2x0LWRiMjQwMGY3NTdhMjQ0MzkiLCJhdWQiOiJodHRwczovL2FwaS51cy13ZXN0LTEub24uZnVzZWJpdC5pbyJ9.PZhXB268cSHPgr83ewTJ59rn5Jq2quHpezXyqDraRc-gPjXgJSjhdVlI3Oz7E8_zgclQMfXfTq4B0jyvLr5G-_CmjXu7cZe3D8_WZD6BkWoQBIVIGFF6CK1rAXIwVkI-FObtezY6UGiVckS7gkMgw_8s9O_m3nDgp0iya7k85J5vA6HIkNkg6e2ucDK3dWHh9TD0RXBxD4Ndw3DpIRuJgrb_8BrSQC9vzlzwOZMdhTcz0xseIt_5VxcPEuAcnsAAmbRtJ0mx_0HdIWUiLhtQb8Dnw02OcM4Tbg4uQfY3grlfSJbOwAsmXGcn4u0UzaMWyby7K01MWJvw3tRr9IsKKglyOuF6fNGw-Tnra-0fzfIdmyuFf986CRVysOV_GfYe8nZn0QMYKDqAO7wLctoBLVC8qDoskbIWRguigdH-b_KNyPc-ZdqiQaA9FvkOme3hD8wzfbLSfVzfx8bX9nwhWybD7VgqWTqE0F7P6eUpNtCFifbcpPwC9nkBfPim6vt6Qy-SdH0DOlQ1-XpOFK_OoOIIfILy1FAhIMwN0jzrHUqQsDqTGdQ0-Ox5d5OlxUo-LzJgFwHC4IenEQ56PiC6pmFE6PSTleeD-RTE6EY76pTc24acwju_AGLwheP98iqikEqIoK89HbkWXXt_fg2LIHY4wpmWTPeLbuVYXLQ6Yu8";
// Use your account and subscription id here
const FUSEBIT_BASE_URL =
  "https://api.us-west-1.on.fusebit.io/v2/account/acc-3113066b371c48b4/subscription/sub-e0d98cb85ad64f24";

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get("/:tenantId/integrations", async (req, res) => {
  const TENANT_ID = req.params.tenantId;
  try {
    // Returns a list of all integrations in your Fusebit  account
    // API Reference: https://developer.fusebit.io/reference/listintegrations
    const integrationsData = await axios.get(
      `${FUSEBIT_BASE_URL}/integration`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    );
    const integrations = integrationsData.data.items;

    // Returns installation state of all integrations for the supplied tenantId
    // API Reference: https://developer.fusebit.io/reference/searchinstalls
    const installsResponse = await axios.get(
      `${FUSEBIT_BASE_URL}/install?tag=fusebit.tenantId=${TENANT_ID}`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    const integrationsList = integrations.map((integration) => {
      const isInstalled = (installsResponse?.data.items || []).find(
        (install) => install.parentId === integration.id
      );

      return {
        integrationId: integration.id,
        feedId: integration.tags["fusebit.feedId"],
        isInstalled: !!isInstalled,
        title: integration.id,
      };
    });

    res.status(200);
    res.send(integrationsList);
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
});

app.get("/:integrationId/:tenantId/installUrl", async (req, res) => {
  const INTEGRATION_ID = req.params.integrationId;
  const TENANT_ID = req.params.tenantId;
  const HOST = req.headers.host;

  try {
    const response = await axios.post(
      `${FUSEBIT_BASE_URL}/integration/${INTEGRATION_ID}/session`,
      {
        redirectUrl: `http://${HOST}/${INTEGRATION_ID}/callback`,
        tags: {
          "fusebit.tenantId": TENANT_ID,
        },
      },
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    console.log(response);
    res.status(200);
    res.send(response.data.targetUrl);
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
});

app.get("/:integrationId/callback", async (req, res) => {
  const INTEGRATION_ID = req.params.integrationId;
  const SESSION_ID = req.query.session;

  try {
    const sessionPersistResponse = await axios.post(
      `${FUSEBIT_BASE_URL}/integration/${INTEGRATION_ID}/session/${SESSION_ID}/commit`,
      {},
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    console.log(sessionPersistResponse);

    res.redirect(`/`);
  } catch (e) {
    console.log("Error committing Fusebit session", e);
    res.sendStatus(500);
  }
});

app.delete("/:integrationId/:tenantId/install", async (req, res) => {
  // Update this with your preferred data storage
  const INTEGRATION_ID = req.params.integrationId;
  const TENANT_ID = req.params.tenantId;

  try {
    // Get installation
    const lookupResponse = await axios.get(
      `${FUSEBIT_BASE_URL}/integration/${INTEGRATION_ID}/install?tag=fusebit.tenantId=${TENANT_ID}`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    const installation = lookupResponse.data.items?.[0];
    // Delete installation
    await axios.delete(
      `${FUSEBIT_BASE_URL}/integration/${INTEGRATION_ID}/install/${installation.id}`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    res.sendStatus(200);
  } catch (e) {
    console.log("Error deleting Fusebit installation", e);
    res.sendStatus(500);
  }
});

// Initialize server
app.listen(8080, () => {
  console.log("Running on port 8080.");
});

// Export the Express API
module.exports = app;
