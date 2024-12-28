import { gql, useLazyQuery, useMutation } from "@apollo/client";

import { QueryHookOptions, QueryResult, useQuery } from "@apollo/client";
import { DocumentNode } from "graphql";

export enum Contract {
  PAID = "PAID",
  FREE = "FREE",
}

export enum Lang {
  ENGLISH = "ENGLISH",
  DUTCH = "DUTCH",
}

export type Account = {
  __typename: "Account";
  password: string;
  accesstoken: string;
  contract: Contract;
  phone: string;
  id: string;
  email: string;
  bio: string;
  diets?: string[];
  location: string;
  username: string;
  language: Lang;
  recipes: number;
  likes: number;
  avatar: string;
};

export type AccountInput = {
  phone?: string;
  email: string;
  password: string;
  bio?: string;
  diets: string[];
  location?: string;
  username: string;
  contract: Contract;
  language: Lang;
  avatar?: string;
};

export type LoginResult = {
  login: Account;
};

export type GetAccountResult = {
  account: Account;
};
export function useSimpleQuery(
  query: DocumentNode,
  options?: QueryHookOptions
): QueryResult {
  const result = useQuery(query, options);

  const { loading, error, data } = result;

  if (error) {
    throw error;
  } else if (!loading && !data) {
    throw new Error("No data found");
  }

  return result;
}

export const Get_Account_Query = gql`
  query GetAccount($id: String!) {
    account(id: $id) {
      password
      accesstoken
      contract
      phone
      id
      email
      bio
      diets
      location
      username
      language
      recipes
      likes
      avatar
    }
  }
`;
export const WriteAccount_Mutation = gql`
  mutation WriteAccount($input: AccountInput!) {
    writeAccount(input: $input)
  }
`;

export const useWriteAccountMutation = ({
  onCompleted,
}: {
  onCompleted: () => void;
}) => {
  const [writeAccount, { loading, error }] = useMutation(
    WriteAccount_Mutation,
    {
      onCompleted: () => onCompleted(),
    }
  );
  return {
    writeAccount,
    loading,
    error,
  };
};

export const loginQuery = gql`
  query Login($name: String!, $password: String!) {
    login(name: $name, password: $password) {
      email
      password
      id
      accesstoken
      diets
    }
  }
`;

export const accountMutation = gql`
  mutation UpdateAccount($input: AccountInput!, $id: String!) {
    updateAccount(input: $input, id: $id)
  }
`;

export const useGetAccountQuery = ({
  onCompleted,
  id,
}: {
  id: string;
  onCompleted: (account: GetAccountResult) => void;
}) => {
  const { loading, data, error } = useSimpleQuery(Get_Account_Query, {
    onCompleted: (result) => {
      onCompleted(result);
    },
    variables: {
      id: id,
    },
  });
  return { loading, data, error };
};

export const useLoginQuery = ({
  onCompleted,
  name,
  password,
}: {
  name: string;
  password: string;
  onCompleted: (account: LoginResult) => void;
}) => {
  const [login, { error }] = useLazyQuery(loginQuery, {
    onCompleted: (result) => {
      onCompleted(result);
    },
    variables: {
      name: name,
      password: password,
    },
  });
  return { login, error };
};

export const useUpdateAccountMutation = ({
  onCompleted,
}: {
  onCompleted: () => void;
}) => {
  const [updateAccount, { loading, error }] = useMutation(accountMutation, {
    onCompleted: () => onCompleted(),
  });
  return {
    updateAccount,
    loading,
    error,
  };
};
