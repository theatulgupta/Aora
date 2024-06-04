import { View, Text, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import FormField from '../../components/FormField.jsx';
import CustomButton from '@/components/CustomButton.jsx';
import { Link } from 'expo-router';

const SignIn = () => {
  const [form, setform] = useState({
    email: '',
    password: '',
  });

  const [isSubmitting, setisSubmitting] = useState(false);

  const submit = () => {};

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView>
        <View className="justify-center w-full min-h-[85vh] px-4 my-6">
          <Image source={images.logo} resizeMode="contain" className="w-[115px] h-[35px] " />
          <Text className="mt-10 text-2xl text-white text-semibold font-psemibold">Log in to Aora</Text>
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
          <CustomButton title="Sign In" handlePress={submit} containerStyles="mt-7" isLoading={isSubmitting} />

          <View className="flex-row justify-center gap-2 pt-5">
            <Text className="text-lg text-gray-100 font-pregular">Don't have an account?</Text>
            <Link href="/sign-up" className="text-lg font-psemibold text-secondary">
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
