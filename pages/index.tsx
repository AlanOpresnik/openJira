import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { Inter } from "next/font/google";
import Layout from "@/components/layouts/Layout";
import EntryList from "@/components/ui/EntryList";
import NewEntrie from "@/components/ui/NewEntrie";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title="openJira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              height: "calc(100ch - 100px)",
            }}
          >
            <CardHeader title={"pendientes"} />
            <CardContent>
            <NewEntrie/>
              <EntryList status="pending" />
              
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              height: "calc(100ch - 100px)",
            }}
          >
            <CardHeader title={"En progreso"} />
            <CardContent>
              <EntryList status="in-progress" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              height: "calc(100ch - 100px)",
            }}
          >
            <CardHeader title={"Terminadas"} />
            <CardContent>
              <EntryList status="finished" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
