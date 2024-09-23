package com.example.vue2backend.mapper;

import com.example.vue2backend.model.UserInfo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserInfoMapper {
    @Select("SELECT * FROM userinfo WHERE username = #{username}")
    UserInfo getUserInfoByUsername(String username);
}
