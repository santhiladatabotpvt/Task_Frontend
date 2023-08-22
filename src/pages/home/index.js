import { Autocomplete, Chip, TextField } from '@mui/material'
import React,{ useState } from 'react';

function Home(){
    const [value,setValue] = useState();
    const content = [
      "Pixels",
      "sum",
      "Average",
      "Multiple",
      "Grand",
      "Balance",
      "Add",
    ];
    const addOperation=(e,val)=>{
      var formula = ''; 
      val.forEach(element => {
        element.trim();
        formula += " "+element;
      });
      setValue(formula);
    }
   
        return (
          <>
            <h1>Math Calculation</h1>
            <Autocomplete
              multiple
              id="tags-outlined"
              options={content}
              // getOptionLabel={(option) => option}
              freeSolo
              clearOnBlur
              onChange={(e,val)=>addOperation(e,val)}
              // onInputChange={(e,val)=>handleInputChange(e,val)}
              filterSelectedOptions
              // filterOptions={(options, state) => {
              //      var data = state.inputValue;
              //   if (data === '(' || data === '*' || data === ')' || data === '+'|| data === '-' || data === '{' ||data === '}' || data === '=' ) {
              //       data = ' ';
              //     if(options.filter((item) =>
              //       String(item)
              //         .toLowerCase()
              //         .startsWith(state.inputValue.toLowerCase())))
              //         {

              //           return options.filter((item) =>
              //              String(item)
              //                .toLowerCase()
              //                .startsWith(state.inputValue.toLowerCase())
                            
              //                );
              //         }
              //    return options
              //   }
              //   return options;
              // }}
              // renderTags={(value, getTagProps) =>
              //   {
                
              //    const arr = value;
                 
              //    return value.map((option, index,) => (
              //       <Chip variant="outlined" label={option} {...getTagProps({ index })} />
              //     ));
              //   }
              // }
              renderInput={params => {
                // console.log({...params})
                return (
                  <TextField
                    {...params}
                    label="Select Formula's"
                    variant="outlined"
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <React.Fragment>
                          {params.InputProps.startAdornment}
                          <div style={{ margin: "0 10px" }}>
                            <span></span>
                          </div>
                        </React.Fragment>
                      ),
                    }}
                  />
                );
                }}  
            />
            <div>
              {value &&
              <h3>Formula : {value}</h3>
              }
            </div>
          </>
        );
}

export default Home;