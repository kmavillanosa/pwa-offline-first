import { db } from "@/shared/database/DbContext";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useEffect } from "react";
import { useLiveQuery } from "dexie-react-hooks";

interface ProfileFormProps {
  id?: number;
}

const validationSchema = Yup.object<Entities.Profile>({
  id: Yup.number().required().default(0),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
});

const ProfileForm: React.FC<ProfileFormProps> = ({ id }) => {
  var exists = id !== undefined;

  var currentProfile = useLiveQuery(() => db.profiles.get(id ?? 0), []);

  const router = useRouter();
  const formik = useFormik<Entities.Profile>({
    enableReinitialize : true,
    initialValues: {
      id: exists ? id : undefined,
      lastName: currentProfile?.firstName ? currentProfile?.firstName : "",
      firstName: currentProfile?.firstName ? currentProfile?.lastName : "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      if (values.id !== undefined && values.id > 0) {
        db.profiles.update(values.id, values);
      } else {
        db.profiles.add(values);
      }
      router.push("/root");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProfileForm;
