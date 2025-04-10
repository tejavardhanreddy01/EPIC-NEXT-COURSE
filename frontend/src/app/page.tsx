import qs from "qs";


const homePageQuery = qs.stringify({
    populate: {
      blocks: {
        on: {
          "layout.hero-section": {
            populate: {
              image: {
                fields: ["url", "alternativeText"]
              },
              link: {
                populate: true
              }
            }
          }
        }
      }
    },
});
async function getStrapiData(path: string) {
  const baseUrl = "http://localhost:1337";

  const url = new URL(path, baseUrl);
  url.search = homePageQuery;

  try {
    const response = await fetch(baseUrl + path);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const strapiData = await getStrapiData("/api/home-page");

  const title = strapiData?.data?.title;
  const description = strapiData?.data?.description;
  const logoImage = strapiData?.data?.image;
  return (
    <main className="container mx-auto py-6">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-xl mt-4">{description}</p>
      <img src="http://localhost:1337/uploads/hero_Image_e5f8da159b.png" />
    </main>
  );
}
