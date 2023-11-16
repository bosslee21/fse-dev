import { createSlice } from "@reduxjs/toolkit";



// 
const initialState = {
    modules: [],
    module:{},
    lessons: [],

    lesson: {
        _id: new Date().getTime(),
        name: "New Lesson",
        description: "New Description"
    },
};





// action is new payload 
// state is the current state which is the current state in modules / store

const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        addLesson(state, action) {
            console.log("AddLesson")

            const { courseId, lesson } = action.payload; // destructuring the action.payload courseId , lesson
            console.log(lesson)
            state.module = [...state.modules, lesson ]
            let module = state.modules.find((m) => m.course === courseId); // finding the module that we want to add lesson
            const newLessons = [...module.lessons, lesson]; // append the lesson to the module.lessons
            const updatedModule = { ...module, lessons: newLessons } // override the lesson in the module
            const filterModule = state.modules.filter((mod) => mod.course !== courseId); // remove module that we want override. from all the modules. 


            state.modules = [filterModule, updatedModule]; // override the module in the modules
        },

        

        deleteLesson(state, action) {
            console.log("DeleteLesson")
            const { courseId, lesson } = action.payload;

            let module = state.modules.find((m) => m.course === courseId);
            const removeLessonId = lesson._id; // getting lessonId from passed in lesson

            const removedLessonArr = module.lessons.filter((lesson) => lesson._id !== removeLessonId); // iterate the module and filter out the lesson we want to remove. 
            module = { ...module, lessons: removedLessonArr } // override the lesson in the module with the removedLessonArr

            const filterModule = state.modules.filter((mod) => mod.course !== courseId); // remove the module we want to override from all the modules.

            state.modules = ([...filterModule, module]) // add in the filtermodule with module that we override.

        },


        
        updateModule(state, action) {
            console.log("UpdateModule")
            const { courseId, lesson } = action.payload;
            console.log(lesson)
            let modulesCopy = [...state.modules] // make a copy of the modules. 
            console.log(modulesCopy)

            modulesCopy.map((m) => { // iterate over the modules array. 
                if (m.course === courseId) {

                    let index = m.lessons.findIndex((les) => les._id === lesson._id)
                    console.log(index)
                    m.lessons[index] = { ...lesson, name: lesson.name, description: lesson.description } // delete name:howdy later
                    // m.lessons[index] = { ...lesson, name: "howdy", description: "desciption" } // delete name:howdy later

                }
            })
            state.modules = modulesCopy

        },

        setLesson(state, action) {
            console.log("SetLesson/Edit Button")
            const newLesson = action.payload // (lesson with updated )
            state.lesson = newLesson; // set the lesson to the newLesson


        },

        setModules(state,action) {
            const newModules = action.payload;
            state.modules = newModules
        },

        setModule(state, action) {
            const newModule = action.payload;
            state.module = newModule
        },
        setLessons(state,action) {
            const newLessons = action.payload;
            state.lessons = newLessons
        }
    },
});

// Exports
export const { addLesson, deleteLesson, updateModule, setLesson,setModules,setModule, setLessons } = modulesSlice.actions;
export default modulesSlice.reducer;

// Things to ask :
// input does not work as intended  textbox / input
// does not know if update modules works.

//check addLesson,deleteLesson,updateModule,setLesson
// ----
// const addLesson = async (courseId, lesson) => {

//     const newLesson = await client.addLesson(courseId, lesson);
    
//     setModule({
//       ...module, lessons: newLesson
//     })
    
//   }
// // need work
//   const deleteLesson = async (courseId, lesson) => {
   
//     const newLesson = await client.deleteLesson(courseId, lesson);
    
//     const findModule = modules.find((m) => m.course === courseId);

//     const newLessons = findModule.lessons.filter((les) => les._id !== lesson._id);
  
    
//     setModule({...module, lessons: newLessons } )
//   }

//   const updateModule = async (courseId, lesson) => {
//     try{
//       const updatedLesson = await client.updateLesson(courseId, lesson);
//       fetchModules(); 
//       setModule(modules.lessons.map((les) => les._id === lesson._id ? updatedLesson : les));
//       // setLesson({...lesson})
     
      
//     }
//     catch(error) {
//       console.log(error)
//     }
//   }