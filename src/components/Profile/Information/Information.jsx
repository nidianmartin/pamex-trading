import React, { useState } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";
import "./Information.css";
import { Avatar, Tabs } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { updateUser } from "../../../services/api-services";
const { TabPane } = Tabs;

export default function Information() {
  const authContext = useAuthContext();

  const [state, setState] = useState({
    data: {
      name: authContext.user.name,
      lastname: authContext.user.lastname,
      email: authContext.user.email,
      password: authContext.user.password,
      bio: authContext.user.bio,
      avatar: authContext.user.avatar,
      phone: authContext.user.phone,
    },
    touch: {},
  });

  const [updateError, setUpdateError] = useState(null);

  const { data, error, touch } = state;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateUser(authContext.user.id, data);
    } catch (err) {
      setUpdateError(err.response?.data?.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState((prev) => {
      return {
        ...prev,
        data: {
          ...prev.data,
          [name]: value,
        },
      };
    });
  };

  const handleBlur = (event) => {
    const { name } = event.target;

    setState((prev) => {
      return {
        ...prev,
        touch: {
          ...touch,
          [name]: true,
        },
      };
    });
  };

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Datos Básicos" key="1">
        <div className="user-settings-content">
          <div className="tab-content settings-tab-content">
            <div
              className="tab-pane fade show active"
              id="edit-profile"
              role="tabpanel"
            >
              <form onSubmit={handleSubmit} className="left-space-fix">
                <div className="single-input-group large-box">
                  <div className="member-status clearfix">
                    <div className="member-info">
                      {authContext.user.avatar ? (
                        <Avatar
                          className="user-img"
                          size={64}
                          src={authContext.user.avatar}
                        />
                      ) : (
                        <Avatar
                          className="user-img"
                          size={64}
                          icon={<UserOutlined style={{ fontSize: 46 }} />}
                        />
                      )}

                      <div className="name">
                        <h3 className="name-title font-fix">
                          {authContext.user.name} {""}{" "}
                          {authContext.user.lastname}
                        </h3>
                        <div className="profile-photo">
                          <button className="font-fix">Editar Avatar</button>
                          <input
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type="file"
                            id="avatar"
                            name="avatar"
                            accept="image/png, image/jpeg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="single-input-group large-box">
                  <label htmlFor="name" className="title font-fix">
                    Nombre
                  </label>
                  <input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    placeholder={authContext.user.name}
                    className="font-fix"
                    id="name"
                  />
                  <label htmlFor="lastname" className="title font-fix">
                    Apellido
                  </label>
                  <input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    placeholder={authContext.user.lastname}
                    className="font-fix"
                    id="name"
                  />
                </div>

                <div className="single-input-group large-box">
                  <label htmlFor="bio" className="title font-fix">
                    Biografía
                  </label>
                  <textarea
                    className="font-fix edit-bio"
                    placeholder={authContext.user.bio}
                    id="bio"
                  ></textarea>
                  <div className="bio-condition-text">Hasta 200 caracteres</div>
                </div>

                <div className="single-input-group large-box">
                  <label htmlFor="email" className="title font-fix">
                    Email
                  </label>
                  <input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="email"
                    placeholder={authContext.user.email}
                    className="font-fix"
                    id="email"
                  />
                </div>

                <div className="single-input-group large-box">
                  <div className="row">
                    <div className="col-sm-8 col-12">
                      <div className="single-input-group">
                        <label htmlFor="phone" className="title font-fix">
                          Teléfono
                        </label>
                        <input
                          onBlur={handleBlur}
                          onChange={handleChange}
                          id="phone"
                          type="text"
                          placeholder={authContext.user.phone}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-input-group small-box">
                  <label htmlFor="password" className="title font-fix">
                    Nueva Contraseña
                  </label>
                  <input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    className="font-fix"
                    id="password"
                  />
                </div>
                <button
                  className="button-header"
                  style={{ width: "30%", marginLeft: "4%" }}
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </TabPane>
    </Tabs>
  );
}
