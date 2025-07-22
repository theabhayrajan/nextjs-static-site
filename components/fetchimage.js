export const fetchimage = async (id) => {
  try {
    const response = await fetch(`https://staging.ekarigar.com/medunit2/wp-json/custom/v1/elementor-page/${id}`);
   
    if (!response.ok) {
      throw new Error(`Failed to fetch image with ID ${id}`);
    }
 
    const object = await response.json();
    console.log("data  ;",object.data.sections)
   
    return object.data.sections || null;
   
  } catch (error) {
    console.error(`Error fetching image with ID ${id}:`, error);
    return null;
  }
};