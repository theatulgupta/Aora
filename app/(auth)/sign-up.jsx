import { View, Text, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import { Link } from 'expo-router';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { createUser } from '@/lib/appwrite';

const SignUp = () => {
  const [form, setform] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [isSubmitting, setisSubmitting] = useState(false);

  const submit = () => {
    createUser();
  };

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView>
        <View className="justify-center w-full min-h-[85vh] px-4 my-6">
          <Image source={images.logo} resizeMode="contain" className="w-[115px] h-[35px] " />
          <Text className="mt-10 text-2xl text-white text-semibold font-psemibold">Sign Up to Aora</Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={e => {
              setform({ ...form, username: e });
            }}
            otherStyles="mt-10"
            placeholder={'John Doe'}
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={e => {
              setform({ ...form, email: e });
            }}
            otherStyles="mt-7"
            keyboardType="email-address"
            placeholder={'johndoe@gmail.com'}
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={e => {
              setform({ ...form, password: e });
            }}
            otherStyles="mt-7"
            placeholder={'Strong Password'}
          />
          <CustomButton title="Sign Up" handlePress={submit} containerStyles="mt-7" isLoading={isSubmitting} />

          <View className="flex-row justify-center gap-2 pt-5">
            <Text className="text-lg text-gray-100 font-pregular">Already have an account?</Text>
            <Link href="/sign-in" className="text-lg font-psemibold text-secondary">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
