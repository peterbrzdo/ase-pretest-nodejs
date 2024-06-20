import { DeveloperInterface } from "/Users/I523481/Documents/Develop/ase-pretest-nodejs/src/lib/developer";

export default async function processDevelopers( developers: DeveloperInterface[] ): Promise<string> {
   const results = await Promise.all(
     developers.map(async (developer) => {
       try {
         return await developer.code();
       } catch (error) {
         return (error as Error).message;
       }
     })
   );
   return results.join("\n");
}
