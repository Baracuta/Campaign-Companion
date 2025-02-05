import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Autocomplete,
  TextField,
} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import styles from "../css_modules/display.module.css";
import { Fragment, useState } from "react";
import { Item } from "../types/Item";
import { CategoryOptions } from "../constants/category_options";
import { EffectOptions } from "../constants/effect_options";
import { ItemImageData } from "../constants/item_image_bank";
import StandardImageList from "./ImageList";

type thingProps = {
  campaignId: string;
  editItem?: Item;
  addThing: (id: string, item: Item) => Promise<unknown>;
};

//Set it up to have a similar style to a card, but with unique properties
function AddItem(props: thingProps) {
  const [item, setItem] = useState<Partial<Item>>(props.editItem ?? {});

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const editMode = props.editItem != null;
  const favourite = item.isFavourite === true;

  return (
    <Fragment>
      <button
        className={editMode ? styles.edit_button : styles.card}
        onClick={handleClickOpen}
      >
        {editMode ? "Edit Item" : <p>Add item</p>}
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {editMode ? "Edit this Item" : "Add a New Item to this Campaign"}
        </DialogTitle>
        <DialogContent>
          <div className={styles.add_edit}>
            <h3>{editMode ? "Rename this Item" : "Name this Item"}</h3>

            <input
              type="text"
              value={item.name ?? ""}
              onChange={(e) => {
                const name = e.target.value;
                setItem({ ...item, name });
              }}
            />

            <h3>{editMode ? "Edit Description" : "Describe this Item"}</h3>

            <textarea
              value={item.description ?? ""}
              onChange={(e) => {
                const description = e.target.value;
                setItem({ ...item, description });
              }}
            />

            <h3>{editMode ? "Edit Category" : "Choose Item Category"}</h3>

            <Autocomplete
              className={styles.Autocomplete}
              freeSolo
              options={CategoryOptions}
              value={item.category ?? ""}
              onChange={(e, value) => {
                const category = value ?? undefined;
                setItem({ ...item, category });
              }}
              renderInput={(params) => (
                <TextField {...params} className={styles.auto_text} label="" />
              )}
            />

            <h3>{editMode ? "Edit Effect" : "Choose Item Effect"}</h3>

            <Autocomplete
              className={styles.Autocomplete}
              freeSolo
              options={EffectOptions}
              value={item.effect ?? ""}
              onChange={(e, value) => {
                const effect = value ?? undefined;
                setItem({ ...item, effect });
              }}
              renderInput={(params) => (
                <TextField {...params} className={styles.auto_text} label="" />
              )}
            />

            <h3>{editMode ? "Edit Notes" : "Add Notes"}</h3>

            <textarea
              value={item.notes ?? ""}
              onChange={(e) => {
                const notes = e.target.value;
                setItem({ ...item, notes });
              }}
            />

            <h3>Choose an Image</h3>

            <img src={item.image ?? ""} width={300} height={"auto"} />
            <StandardImageList
              images={ItemImageData}
              imageClick={async (img: string) => {
                const image = img;
                await setItem({ ...item, image });
                return image;
              }}

              
            />

            <h3>Favourite/Unfavourite</h3>

            {favourite ?
              <div onClick={async()=>{
                const isFavourite = false;
                await setItem({...item, isFavourite})
              }}> <StarIcon/>
              </div>
              :
              <div onClick={async()=>{
                const isFavourite = true;
                await setItem({...item, isFavourite})
              }}> <StarBorderIcon/>
              </div>
            }
          </div>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose}>Cancel</button>
          <button
            onClick={() => {
              props.addThing(props.campaignId, item as Item);
              handleClose();
            }}
          >
            {editMode ? "Confirm" : "Add item"}
          </button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

export default AddItem;
